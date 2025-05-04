import { Box, Typography, Link, Stack, Divider, IconButton, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import { Logo } from './navbar/Logo';
import { useTranslation } from 'react-i18next';

export function Footer() {
    const theme = useTheme();
    const currentYear = 2025;
    const { t } = useTranslation();
    
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
                <Stack 
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={7}
                    sx={{ mb: 4 }}
                >
                    <Box sx={{ width: { xs: '100%', md: '25%' } }}>
                        <Typography variant="h6" fontWeight="bold" mb={2}>
                            <Logo logo='logocolor.png'/>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mb={2}>
                            {t('footer.companyDesc')}
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <PhoneIcon fontSize="small" color="primary" />
                            <Typography variant="body2">+7 777 777 77 77</Typography>
                        </Stack>
                    </Box>
                    
                    <Stack 
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={3}
                        justifyContent="space-between"
                        sx={{ width: { xs: '100%', md: '75%' } }}
                    >
                        <Box sx={{ width: { xs: '100%', sm: '33%' } }}>
                            <Typography variant="subtitle1" fontWeight="bold" mb={2}>
                                {t('footer.resources.title')}
                            </Typography>
                            <Stack spacing={1.5}>
                                <Link href="#" underline="hover" color="text.secondary">{t('footer.resources.products')}</Link>
                                <Link href="#" underline="hover" color="text.secondary">{t('footer.resources.experience')}</Link>
                                <Link href="#" underline="hover" color="text.secondary">{t('footer.resources.strategy')}</Link>
                            </Stack>
                        </Box>
                        
                        <Box sx={{ width: { xs: '100%', sm: '33%' } }}>
                            <Typography variant="subtitle1" fontWeight="bold" mb={2}>
                                {t('footer.company.title')}
                            </Typography>
                            <Stack spacing={1.5}>
                                <Link href="/about" underline="hover" color="text.secondary">{t('footer.company.about')}</Link>
                                <Link href="#" underline="hover" color="text.secondary">{t('footer.company.contact')}</Link>
                                <Link href="#" underline="hover" color="text.secondary">{t('footer.company.success')}</Link>
                                <Link href="#" underline="hover" color="text.secondary">{t('footer.company.privacy')}</Link>
                            </Stack>
                        </Box>
                        
                        <Box sx={{ width: { xs: '100%', sm: '33%' } }}>
                            <Typography variant="subtitle1" fontWeight="bold" mb={2}>
                                {t('footer.links.title')}
                            </Typography>
                            <Stack spacing={1.5}>
                                <Link href="#" underline="hover" color="text.secondary">{t('footer.links.premium')}</Link>
                                <Link href="#" underline="hover" color="text.secondary">{t('footer.links.services')}</Link>
                                <Link href="#" underline="hover" color="text.secondary">{t('footer.links.team')}</Link>
                                <Link href="#" underline="hover" color="text.secondary">{t('footer.links.app')}</Link>
                            </Stack>
                        </Box>
                    </Stack>
                </Stack>

                <Divider sx={{ my: 4 }} />
                
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Typography variant="body2" color="text.secondary">
                        {t('footer.rights', { year: currentYear })}
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