import { createClient } from "../node_modules/@supabase/supabase-js/dist/module/index";

export const supabase = createClient(
  `https://xasomaijctvtawozrtzs.supabase.co`,
  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhhc29tYWlqY3R2dGF3b3pydHpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5NzYxNzYsImV4cCI6MjAxODU1MjE3Nn0.eyvNUNOwEZPEVqjYGp9pnQSp8bEsI-lgCTkOkz8tSyo`
);