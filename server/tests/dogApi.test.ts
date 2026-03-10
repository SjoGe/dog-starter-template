import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../index";

describe("GET /api/dogs/random", () => {

  it("should return random dog image", async () => {

    const response = await request(app).get("/api/dogs/random");

    // HTTP status should be 200
    expect(response.status).toBe(200);

    // success should be true
    expect(response.body.success).toBe(true);

    // data should exist
    expect(response.body.data).toBeDefined();

    // data should contain imageUrl
    expect(response.body.data.imageUrl).toBeDefined();

    // imageUrl should be a string
    expect(typeof response.body.data.imageUrl).toBe("string");

  });

});