
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/messages', (request: Request, response: Response) => {
    response.json({
        ok: true,
        message: 'Todo esta bien!!'
    });
});

router.post('/messages', (request: Request, response: Response) => {
    
    const body = request.body.body;
    const from = request.body.from;

    response.json({
        ok: true,
        body,
        from
    });
});

export default router;