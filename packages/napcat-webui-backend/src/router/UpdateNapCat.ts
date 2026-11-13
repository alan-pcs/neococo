/**
 * @file UpdateNapCat路由
 */

import { Router } from 'express';
import { UpdateNapCatHandler } from '@/napcat-webui-backend/src/api/UpdateNapCat';

const router: Router = Router();

// POST /api/UpdateNapCat/update - 更新 neococo
router.post('/update', UpdateNapCatHandler);

export { router as UpdateNapCatRouter };
