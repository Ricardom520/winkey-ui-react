import Index from '@/pages';
import Components from '@/pages/Components';
import GuidePage from '@/pages/Guide';
import Design from '@/pages/Design';
import Test from '@/pages/test'

export const routers = {
  '/': Index,
  '/guide': GuidePage,
  '/components': Components,
  '/design': Design,
  '/test': Test
}