import app from '../app';
import supertest from 'supertest';
import { json } from 'express';
import IncidentModel from '../models/IncidentModel';


describe("aggrigation", () => {
    describe("get incidents aggrigations",()=>{
        describe("succed",()=>{
            it("should return data",async()=>{
                const res=await supertest(app).get("/aggrigation/");
                expect(res.status).toBe(200);
            })
        })
        describe("error",()=>{
            it("should return 404", async()=>{
                jest.spyOn(IncidentModel, 'find').mockRejectedValueOnce(new Error());
                const res=(await supertest(app).get("/aggrigation/"));
                expect(res.status).toBe(404);
            })
        })
    })
})


