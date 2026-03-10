import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../index";

describe("Dog Routes", () => {

  it("should return 404 for invalid route", async () => {

    const response = await request(app).get("/api/dogs/invalid");

    expect(response.status).toBe(404);

    expect(response.body.error).toBeDefined();

    expect(typeof response.body.error).toBe("string");

  });

});