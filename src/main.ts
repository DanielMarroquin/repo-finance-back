import { createExpressServer } from "routing-controllers";
import 'dotenv/config';

const app = createExpressServer({
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:4200',
    credentials: true,
  },
  routePrefix: "/bp", 
  controllers: [__dirname + "/controllers/*{.js,.ts}"],
});

// Solo ejecuta app.listen() en entorno local (no en Vercel)
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3002;
  app.listen(PORT, () => {
    console.log(`Servidor Iniciado en http://localhost:${PORT}`);
  });
}

export default app; // Exporta la app para Vercel