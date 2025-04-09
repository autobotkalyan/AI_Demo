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
test('Test005 @jira', async ({ }) => {

    const filePath = "/Users/kalyanparam/Downloads/AI_Demo/testData/Output.txt";
    const payloadString = fs.readFileSync(filePath, 'utf-8');  

  const requestContext = await request.newContext();
  const response = await requestContext.put('https://uafaidemo.atlassian.net/rest/api/3/issue/SCRUM-1', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic YXV0b2JvdGthbHlhbkBnbWFpbC5jb206QVRBVFQzeEZmR0YweHF4aEdhODlnajc5TzBjNV9GRThISWlQdEQ3R2xreEZqY19XTzdlTVNSM20tSW13RGZvOTM2el9GbEpXdDZvN283SjA0UG1hRWdYWTFiUUo0V251VTc0b21OUjNKTmExYnN4SkdTZzlDUkN4VjdKMkVNNk9wS3g2RHF5QlNWcVdYTjVBaDViSEhVd29YWEMzSDNUOFJCTlVkRVR6NEZqdWlSdURYTlB4RUlZPTE2RTJEMDU2'
    },
    data: {
        
            "update": {
              "description": [
                {
                  "set": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Acceptance criteria below: "+"\n"+payloadString
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            }
          }
  });

  expect(response.ok()).toBeTruthy();
  const responseBody = (await response.body());
//   const res = JSON.parse(responseBody.toString());
  console.log(responseBody.toString());
});
