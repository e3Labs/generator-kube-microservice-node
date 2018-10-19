import { get<%= entityName %>s } from './../../entities/<%= entityName %>/<%= businessName %>';
import { Request, Response, NextFunction, Router } from 'express';
import { check, validationResult } from 'express-validator/check';

const router = Router();
const checkEntityGet = [
  check('somefield').exists()
];

router.get('/', checkEntityGet, (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(new UnprocessableEntityException(errors.array()));
    return;
  }
  get<%= entityName %>s(req, res, next);
});

export default router;