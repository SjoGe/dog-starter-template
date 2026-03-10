import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../index";

describe("Dog Routes", () => {

  it("should return 404 for invalid route", async () => {

    const response = await request(app).get("/api/dogs/invalid");

    // should return 404
    expect(response.status).toBe(404);

    // response should contain an error message
    expect(response.body.error).toBeDefined();

    // error message should be a string
    expect(typeof response.body.error).toBe("string");

  });

});