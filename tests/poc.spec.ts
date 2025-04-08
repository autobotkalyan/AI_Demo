import { test, expect } from '@playwright/test';                        
                                                                                
  test('Navigate to Saucedemo @demo', async ({ page }) => {                           
    await page.goto('https://www.saucedemo.com/');                              
    await page.fill('input[name=\"user-name\"]', 'standard_user');              
    await page.fill('input[name=\"password\"]', 'secret_sauce');                
    await page.click('input[type=\"submit\"]');           
    await page.waitForTimeout(5000);                         
  });