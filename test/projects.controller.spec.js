import app from '../src/app.js'
import request from "supertest";

describe('GET /projects',()=>{
    test("should respond with a 200 status code",async()=>{
        const response =await request(app).get('/projects').send();
        expect(response.statusCode).toBe(200)
    })
    test('should respond with an Array', async() => {
        const response = await request(app).get('/projects').send()
        expect(response.body).toBeInstanceOf(Array)
     })

     
}) 