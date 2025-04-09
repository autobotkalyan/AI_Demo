import {test, expect} from '@playwright/test'

/*Certainly! Here are three test steps to navigate and sign in to Chase.com website:

1. **Open the Chase Website:**
   - Launch a web browser (e.g., Chrome, Firefox, Safari).
   - Enter the URL `https://www.chase.com` in the address bar and press Enter.
   - Verify that the Chase homepage loads successfully.

2. **Navigate to the Sign-In Page:**
   - On the Chase homepage, locate the "Sign in" button or link, usually found at the top right corner.
   - Click on "Sign in."
   - Ensure that you are redirected to the sign-in page where login fields are displayed.

3. **Enter Credentials and Sign In:**
   - Input your username and password in the respective fields.
   - Click on the "Sign in" button to proceed.
   - Verify that you are successfully logged into your Chase account, and the account dashboard is displayed.

Make sure to use only valid test credentials for testing purposes.*/
test('Test003 @API', async ({ page }) => {
  // Step 1: Open the Chase Website chase
  await page.goto('https://www.chase.com');
  await expect(page).toHaveURL('https://www.chase.com/');

  // Step 2: Navigate to the Sign-In Page
  const signInButton = page.locator('text=Sign in');
  await signInButton.click();
  await expect(page).toHaveURL(/.*chase\.com\/login/);

  // Step 3: Enter Credentials and Sign In
  const usernameField = page.locator('#userId-input-field');
  const passwordField = page.locator('#password-input-field');
  const loginButton = page.locator('#signin-button');

  await usernameField.fill('Kalyansubuser1');
  await passwordField.fill('Sharkal@2091');
  await loginButton.click();

  // Verify successful login by checking for a specific element on the dashboard
  const accountDashboard = page.locator('text=Account Dashboard'); // Adjust this selector based on the actual dashboard element
  await expect(accountDashboard).toBeVisible();
});