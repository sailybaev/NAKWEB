import { Box, Typography, Link, Stack, Divider, Grid, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import { Logo } from './navbar/Logo';

export function Footer() {
    const theme = useTheme();
    const currentYear = new Date().getFullYear();
    
    return (
        <Box
            component="footer"
            sx={{
                py: 5,
                px: 0,
                mt: 'auto',
                backgroundColor: theme.palette.mode === 'light' 
                    ? theme.palette.background.paper 
                    : theme.palette.background.default,
                position: 'static',
                bottom: 0,
                width: '100%'
            }}
        >
            <Box sx={{ px: { xs: 3, md: 6, lg: 10 } }}>
                <Grid container spacing={7}>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" fontWeight="bold" mb={2}>
                            <Logo logo='logocolor.png'/>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mb={2}>
                            НАК "Нұр Астана Құрылыс" — ведущая строительная компания Казахстана, <br /> специализирующаяся на возведении жилых комплексов и коммерческих объектов <br /> с инновационными архитектурными решениями.
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <PhoneIcon fontSize="small" color="primary" />
                            <Typography variant="body2">+7 777 777 77 77</Typography>
                        </Stack>
                    </Grid>
                    
                    <Grid item xs={6} sm={3} md={3}>
                        <Typography variant="subtitle1" fontWeight="bold" mb={2}>
                            Ресурсы
                        </Typography>
                        <Stack spacing={1.5}>
                            <Link href="#" underline="hover" color="text.secondary">Наши продукты</Link>
                            <Link href="#" underline="hover" color="text.secondary">Пользовательский опыт</Link>
                            <Link href="#" underline="hover" color="text.secondary">Стратегия развития</Link>
                        </Stack>
                    </Grid>
                    
                    <Grid item xs={6} sm={3} md={3}>
                        <Typography variant="subtitle1" fontWeight="bold" mb={2}>
                            Компания
                        </Typography>
                        <Stack spacing={1.5}>
                            <Link href="#" underline="hover" color="text.secondary">О нас</Link>
                            <Link href="#" underline="hover" color="text.secondary">Контакты и поддержка</Link>
                            <Link href="#" underline="hover" color="text.secondary">История успеха</Link>
                            <Link href="#" underline="hover" color="text.secondary">Настройки и конфиденциальность</Link>
                        </Stack>
                    </Grid>
                    
                    <Grid item xs={6} sm={3} md={3}>
                        <Typography variant="subtitle1" fontWeight="bold" mb={2}>
                            Быстрые ссылки
                        </Typography>
                        <Stack spacing={1.5}>
                            <Link href="#" underline="hover" color="text.secondary">Премиум поддержка</Link>
                            <Link href="#" underline="hover" color="text.secondary">Наши услуги</Link>
                            <Link href="#" underline="hover" color="text.secondary">Наша команда</Link>
                            <Link href="#" underline="hover" color="text.secondary">Скачать приложение</Link>
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />
                
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Typography variant="body2" color="text.secondary">
                        © {currentYear} НАК "Нұр Астана Құрылыс".
                    </Typography>
                    
                    <Stack direction="row" spacing={1}>
                        <IconButton color="inherit" size="small">
                            <FacebookIcon fontSize="small" />
                        </IconButton>
                        <IconButton color="inherit" size="small">
                            <InstagramIcon fontSize="small" />
                        </IconButton>
                        <IconButton color="inherit" size="small">
                            <YouTubeIcon fontSize="small" />
                        </IconButton>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}