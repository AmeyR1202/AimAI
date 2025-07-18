"use server";

import { db } from "@/lib/Prisma";
import { auth } from "@clerk/nextjs/server";

export async function updateUser(data) {
  console.log("Updating user with data:", data);

  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) throw new Error("User Not Found");

  try {
    const result = await db.$transaction(
      async (tx) => {
        // ✅ FIXED: use data.industry instead of industry.data
        let industryInsight = await tx.industryInsight.findFirst({
          where: {
            industry: data.industry,
          },
        });

        if (!industryInsight) {
          industryInsight = await tx.industryInsight.create({
            data: {
              industry: data.industry,
              salaryRanges: [],
              growthRate: 0,
              demandLevel: "MEDIUM",
              topSkills: [],
              marketOutlook: "NEUTRAL",
              keyTrends: [],
              recommendedSkills: [],
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
          });
        }

        const updatedUser = await tx.user.update({
          where: {
            id: user.id,
          },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });

        return { updatedUser, industryInsight };
      },
      { timeout: 10000 }
    );

    return { success: true, ...result };
  } catch (error) {
    console.error("Error Updating User and Industry", {
      message: error.message,
      stack: error.stack,
    });
    throw new Error("Failed to update the Profile");
  }
}

export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
    select: {
      industry: true,
    },
  });

  if (!user) throw new Error("User not found");

  return {
    isOnboarded: !!user.industry,
  };
}
