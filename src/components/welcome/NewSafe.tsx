import React from 'react'
import { Box, Grid, SvgIcon, Typography } from '@mui/material'
import css from './styles.module.css'
import CheckFilled from '@/public/images/common/check-filled.svg'

import WelcomeLogin from './WelcomeLogin'
import SafeListDrawer from '@/components/welcome/SafeListDrawer'

const BulletListItem = ({ text }: { text: string }) => (
  <li>
    <SvgIcon className={css.checkIcon} component={CheckFilled} inheritViewBox />
    <Typography color="static.main" fontWeight={700}>
      {text}
    </Typography>
  </li>
)

const NewSafe = () => {
  return (
    <>
      <Grid container spacing={3} p={3} pb={0} flex={1} direction="row-reverse">
        <Grid item xs={12} lg={6}>
          <WelcomeLogin />
        </Grid>
        <Grid item xs={12} lg={6} flex={1}>
          <div className={css.content}>
            <Box minWidth={{ md: 480 }} className={css.sidebar}>
              <SafeListDrawer />
            </Box>

            <Typography variant="h1" fontSize={[44, null, 52]} lineHeight={1} letterSpacing={-1.5} color="static.main">
              Unlock a new way of ownership
            </Typography>

            <Typography mb={1} color="static.main">
              The most trusted decentralized custody protocol and collective asset management platform.
            </Typography>

            <ul className={css.bulletList}>
              <BulletListItem text="Stealth security with multiple owners" />
              <BulletListItem text="Make it yours with modules and guards" />
              <BulletListItem text="Access 130+ ecosystem apps" />
            </ul>
          </div>
        </Grid>
      </Grid>

      <Grid item flex={1}>
        <div className={css.content}>
          <Typography
            variant="h1"
            fontSize={[44, null, 52]}
            lineHeight={1}
            letterSpacing={-1.5}
            color="static.main"
            mb={1}
          >
            Welcome to {'MetisSafe'}
          </Typography>

          <Typography mb={5} color="static.main">
            The most trusted decentralized custody protocol and collective asset management platform.
          </Typography>

          <Grid container spacing={3} sx={{ maxWidth: '800px' }}>
            <Grid item xs={12} lg={6}>
              <Paper className={css.createAddCard}>
                <SvgIcon component={NewSafeIcon} inheritViewBox sx={{ width: '42px', height: '42px' }} />
                <Typography variant="h3" fontWeight={700} mb={1} mt={3}>
                  Create Safe Account
                </Typography>

                <Typography variant="body2" mb={3}>
                  A new Account that is controlled by one or multiple owners.
                </Typography>

                <span style={{ flex: 1 }} />
                <Track {...CREATE_SAFE_EVENTS.CREATE_BUTTON}>
                  <Button
                    variant={wallet ? 'contained' : 'outlined'}
                    onClick={() => router.push(AppRoutes.newSafe.create)}
                  >
                    + Create new Account
                  </Button>
                </Track>
              </Paper>
            </Grid>

            <Grid item xs={12} lg={6}>
              <Paper className={css.createAddCard}>
                <SvgIcon component={LoadSafeIcon} inheritViewBox sx={{ width: '42px', height: '42px' }} />
                <Typography variant="h3" fontWeight={700} mb={1} mt={3}>
                  Add existing Account
                </Typography>

                <Typography variant="body2" mb={3}>
                  Already have a Safe Account? Add it via its address.
                </Typography>

                <span style={{ flex: 1 }} />
                <Track {...LOAD_SAFE_EVENTS.LOAD_BUTTON}>
                  <Button variant="outlined" onClick={() => router.push(AppRoutes.newSafe.load)}>
                    Add existing Account
                  </Button>
                </Track>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid >
  )
}

export default NewSafe
