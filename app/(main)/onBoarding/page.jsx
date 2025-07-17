import React from "react";

const onBoardingPage = () => {
  // check if User is already onboarded
  const OnboardingPage = async () => {
    // Check if user is already onboarded
    const { isOnboarded } = await getUserOnboardingStatus();

    if (isOnboarded) {
      redirect("/dashboard");
    }

    return (
      <main>
        <OnboardingForm industries={industries} />
      </main>
    );
  };
};

export default onBoardingPage;
