import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, CircularProgress, Typography } from "@mui/material";

const MetabaseChart = () => {
    const [iframeUrl, setIframeUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchIframeUrl = async () => {
            try {
                const res = await axios.get("http://localhost:3001/metabase-url");
                setIframeUrl(res.data.iframeUrl);
            } catch (error) {
                console.error("Error al obtener el iframe de Metabase:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchIframeUrl();
    }, []);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="300px">
                <CircularProgress />
            </Box>
        );
    }

    if (!iframeUrl) {
        return (
            <Typography color="error">No se pudo cargar el gráfico de Metabase.</Typography>
        );
    }

    return (
        <Box
            sx={{
                width: "100%",
                height: "600px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                overflow: "hidden",
                mb: 2
            }}
        >
            <iframe
                src={iframeUrl}
                frameBorder="0"
                width="100%"
                height="100%"
                allowtransparency="true"
                title="Gráfico Metabase"
            ></iframe>
        </Box>
    );
};

export default MetabaseChart;
