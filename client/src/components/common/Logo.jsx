import { Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = () => {
  const theme = useTheme();

  return (
    <Link to="/" component={Link} style={{ textDecoration: 'none' }}>
      <Typography fontWeight="700" fontSize="1.7rem" color="secondary" style={{ color: '#FFFFFF' }}>
        Trailers<span style={{ color: theme.palette.primary.main }}>Now</span>
      </Typography>
    </Link>
  );
};

export default Logo;
