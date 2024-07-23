import { NextRequest, NextResponse } from 'next/server';
import item, {Item} from './product'

export const GET = function(req: NextRequest) {
  return NextResponse.json({
    message: 'Success',
    data: { item },
  });
};

// You can add more handlers for other methods like POST, PUT, DELETE as needed
