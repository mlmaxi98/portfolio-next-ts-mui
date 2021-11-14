import { useTheme } from "@mui/material";
import Parts from "react-tsparticles";

interface Props {
    color: boolean;
}
const Particles = (props: Props) => {
    const theme = useTheme()
    const { color } = props;
    return (
        <Parts
            options={{
                fpsLimit: 60,
                particles: {
                    color: {
                        value: color ? theme.palette.secondary.main : theme.palette.primary.main,
                    },
                    links: {
                        color: color ? theme.palette.secondary.main : theme.palette.primary.main,
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 4,
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                        value: 45,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 5,
                    },
                    zIndex: {
                        opacityRate: 0.3,
                    }
                },
                detectRetina: true,
            }}
        />
    )
}

export default Particles