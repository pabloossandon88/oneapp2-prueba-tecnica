import request from 'supertest';
import app from '../app';

describe('API Endpoints - /api/responses', () => {

  const validData = {
    email: `test${Date.now()}@example.com`,
    language: 'javascript',
    motivation: 'Porque quiero aprender'
  };

  it('POST /api/responses should create a new response', async () => {
    const res = await request(app)
      .post('/api/responses')
      .send(validData);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('message');
  });

  it('POST /api/responses should fail with invalid email', async () => {
    const res = await request(app)
      .post('/api/responses')
      .send({ ...validData, email: 'invalidemail' });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('errors');
    expect(Array.isArray(res.body.errors)).toBe(true);
  });

  it('GET /api/responses/count should return count', async () => {
    const res = await request(app).get('/api/responses/count');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('count');
    expect(typeof res.body.count).toBe('number');
  });

  it('GET /api/responses/recent should return recent responses', async () => {
    const res = await request(app).get('/api/responses/recent');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('recent');
    expect(Array.isArray(res.body.recent)).toBe(true);
  });

  it('GET /api/responses/stats should return stats per language', async () => {
    const res = await request(app).get('/api/responses/stats');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('stats');
    expect(Array.isArray(res.body.stats)).toBe(true);
  });

  it('GET /api/responses/:email should return data for specific email', async () => {
    // Primero, crear un registro con email conocido
    const newEmail = `email${Date.now()}@test.com`;
    await request(app)
      .post('/api/responses')
      .send({ ...validData, email: newEmail });

    // Luego, consultarlo
    const res = await request(app).get(`/api/responses/${newEmail}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('email', newEmail);
  });

  it('GET /api/responses/:email should return empty array for unknown email', async () => {
    const res = await request(app).get('/api/responses/unknown@test.com');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});
