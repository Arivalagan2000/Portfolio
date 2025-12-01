import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';

const app = new Hono();

// Middleware
app.use('*', cors());
app.use('*', logger(console.log));

// Health check endpoint
app.get('/make-server-ea183f60/health', (c) => {
  return c.json({ 
    status: 'ok', 
    message: 'Portfolio backend is running',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/make-server-ea183f60/', (c) => {
  return c.json({ 
    message: 'Portfolio API - This is a static portfolio website and does not require backend services.',
    endpoints: {
      health: '/make-server-ea183f60/health'
    }
  });
});

Deno.serve(app.fetch);
