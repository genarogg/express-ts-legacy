import { Request, Response } from 'express';

const renderHome = (req: Request, res: Response) => {
    res.render('index', { message: 'Hello from TypeScript Express with EJS!!!!' });
};

export default renderHome;