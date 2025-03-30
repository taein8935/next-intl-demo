import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// 언어 접두어 없는 경로 → 자동 리디렉션 처리
export default createMiddleware(routing);

export const config = {
  // 다음 경로는 제외:
  // - /api, /trpc, /_next, /_vercel
  // - 정적 리소스 (.js, .css, .ico 등)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
