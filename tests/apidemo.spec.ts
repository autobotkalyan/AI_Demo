import { test, expect } from '@playwright/test';

// test('API Test @API1', async ({ request }) => {
//   const response = await request.get('https://reqres.in/api/users?page=2');
//   expect(response.ok()).toBeTruthy();
//   const data = await response.json();
//   console.log(data);
// });

test('POST /api/users @API1', async ({ request }) => {                              
  const response = await request.post('https://reqres.in/api/users', {      
      data: {                                                               
          name: 'John Doe',                                                 
          job: 'Software Engineer'                                          
      }                                                                     
  });                                                                       
  expect(response.status()).toBe(201);     
  console.log(response.json());                                 
}); 
