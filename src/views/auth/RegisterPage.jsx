import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { strengthColor, strengthIndicator } from '@utils/password-strength';
import FormAuth from './form-auth';
import { FormInput, AnimateButton } from '@components';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);

  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState();

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  const onSubmit = (data) => {};

  return (
    <FormAuth headerTitle="Đăng ký" footerTitle="Bạn đã có tài khoản, đăng nhập ngay" footerLink="/auth/login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <FormInput lg={12} id="full_name" label="Full name" register={register} errors={errors} required />
          <FormInput lg={12} id="email" label="Email Address / Username" register={register} errors={errors} required />
          <FormInput
            lg={12}
            id="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            register={register}
            errors={errors}
            required="password"
            onChange={(e) => changePassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                  size="large"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          {strength !== 0 && (
            <FormControl fullWidth>
              <Box sx={{ mb: 2 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Box style={{ backgroundColor: level?.color }} sx={{ width: 85, height: 8, borderRadius: '7px' }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" fontSize="0.75rem">
                      {level?.label}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </FormControl>
          )}
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <FormControlLabel
                control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} name="checked" color="primary" />}
                label={
                  <Typography variant="subtitle1">
                    Đồng ý với &nbsp;
                    <Typography variant="subtitle1" component={Link} to="#">
                      Điều khoản & Dịch vụ.
                    </Typography>
                  </Typography>
                }
              />
            </Grid>
          </Grid>
        </Stack>
        <Box sx={{ mt: 2 }}>
          <AnimateButton>
            <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary">
              Đăng ký
            </Button>
          </AnimateButton>
        </Box>
      </form>
    </FormAuth>
  );
};

export default RegisterPage;
