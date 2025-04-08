import { test, expect, request } from '@playwright/test';
import * as fs from 'fs';

/* Write Playwright API automation typescript for the following scenario:
BaseURI: https://api.openai.com/v1/responses
Content-Type: application/json,
Authorization: Bearer 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
Request Body: {
  {
    "model": "gpt-4o",
    "input": "Generate Playwright typescript for https://www.chase.com"
}
*/
test('Test005 @API', async ({ }) => {

  const requestContext = await request.newContext();
  const response = await requestContext.post('https://api.openai.com/v1/responses', {
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      model: 'gpt-4o',
        // input: 'Create three test steps to check the enter username Kalyansubuser1 and password Sharkal@2091 in https://www.chase.com'
        input: 'Create three test steps navigate to https://www.chase.com to signin'
      //  input: 'Create playwright type script from /Users/kalyanparam/Playwright_AI_Demo/tests/htmlCode.txt'
      //  input: 'Create playwright script select by id for login from /Users/kalyanparam/Playwright_AI_Demo/tests/htmlCode.txt'
    }
  });

  expect(response.ok()).toBeTruthy();
  const responseBody = (await response.body());
  const res = JSON.parse(responseBody.toString());
  // console.log(responseBody.toString());
  console.log(res.output[0].content[0].text);

  try {
    fs.writeFileSync("/Users/kalyanparam/Downloads/AI_Demo/Playwright_AI_Demo/tests/Test003.spec.ts", "import {test, expect} from '@playwright/test'"+"\n"+"\n"+"/*"+res.output[0].content[0].text+"*/");
    console.log(`Successfully wrote to file`);
  } catch (error: any) {
    console.error(`Failed to write to file: ${error.message}`);
  }
});
