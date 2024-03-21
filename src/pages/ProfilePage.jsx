import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {Divider} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";

const interests = [
    { label: 'Art' },
    { label: 'Books' },
    { label: 'Cooking' },
    { label: 'Dance' },
    { label: 'Fashion' },
    { label: 'Fitness' },
    { label: 'Gaming' },
    { label: 'Music' },
    { label: 'Photography' },
    { label: 'Sports' },
    { label: 'Technology' },
    { label: 'Travel' },
    { label: 'Writing' },
    { label: 'Yoga' },
];

function ProfilePage() {
    return (
        <Container maxWidth={"md"}>
            <Card sx={{ my: 2, p: 2 }}>
                <Typography variant="h5" component="h2" sx={{padding:2}}>Basic Information</Typography>

                <Divider sx={{marginBottom: 2}} />

                <Grid container>
                    <Grid item xs={12} md={4} sx={{display:"flex", justifyContent:"center"}}>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://mui.com/static/images/avatar/1.jpg"
                            sx={{ width: 100, height: 100 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider sx={{marginTop: 2}} />

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        mt: 2,
                    }}
                >
                    <Button variant="contained">Save</Button>
                </Box>
            </Card>

            <Card sx={{ my: 2, p: 2 }}>
                <Typography variant="h5" component="h2" sx={{padding:2}}>Bio and Interests</Typography>

                <Divider sx={{marginBottom: 2}} />

                <Grid container>
                    <TextField id="bio" label="Bio" multiline rows={4} fullWidth  />

                    <Grid item xs={12} mt={2}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            multiple
                            options={interests}
                            renderInput={(params) => <TextField {...params} label="Interests" />}
                        />
                    </Grid>
                </Grid>

                <Divider sx={{marginTop: 2}} />

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        mt: 2,
                    }}
                >
                    <Button variant="contained">Save</Button>
                </Box>
            </Card>
        </Container>
    );
}

export default ProfilePage;
