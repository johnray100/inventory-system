import { Box, Button, TextField, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

export default function TwoStep() {
    const navigate = useNavigate();
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        if (value.length > 1) value = value[value.length - 1]; // Take the last character if multiple entered
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        // Auto focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <Box sx={{ p: 4, bgcolor: "white", borderRadius: 4, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, color: "#1e293b" }}>
                Two Step Verification
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1, lineHeight: 1.6 }}>
                We sent a verification code to your mobile. Enter the code from the mobile in the field below.
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 4, color: "#1e293b" }}>
                ******1234
            </Typography>

            <Box component="form" noValidate>
                <Typography variant="subtitle2" fontWeight="600" sx={{ mb: 2, color: "#1e293b" }}>
                    Type your 6 digits security code
                </Typography>
                
                <Stack direction="row" spacing={1} sx={{ mb: 4, justifyContent: "space-between" }}>
                    {code.map((digit, index) => (
                        <TextField
                            key={index}
                            inputRef={(el) => (inputRefs.current[index] = el)}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            variant="outlined"
                            size="small"
                            inputProps={{ 
                                style: { textAlign: "center", fontWeight: "bold", fontSize: 18, padding: "10px 0" },
                                maxLength: 1 
                            }}
                            sx={{ width: { xs: 40, sm: 50 }, "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                        />
                    ))}
                </Stack>

                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        py: 1.2,
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: 600,
                        bgcolor: "#4f46e5",
                        mb: 3,
                        "&:hover": { bgcolor: "#4338ca" },
                    }}
                    onClick={() => navigate("/")}
                >
                    Verify My Account
                </Button>

                <Typography variant="body2" align="center" color="text.secondary">
                    Didn't get the code?{" "}
                    <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: "#4f46e5", fontWeight: 600, cursor: "pointer", "&:hover": { textDecoration: "underline" } }}
                    >
                        Resend
                    </Typography>
                </Typography>
            </Box>
        </Box>
    );
}
