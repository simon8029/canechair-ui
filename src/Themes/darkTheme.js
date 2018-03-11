import grey from 'material-ui/colors/grey';

export default {
    palette: {
        type: 'dark',
        types: {
            dark: {
                background: {
                    paper: '#2d353c',
                    default: '#2d353c',
                    appBar: '#2d353c',
                    contentFrame: '#2d353c',
                    chip: '#2d353c',
                    avatar: '#2d353c'
                }
            }
        },
        primary: {
            light: grey[100],
            main: grey[300],
            dark: grey[500],
        },
        secondary: {
            light: grey[200],
            main: grey[500],
            dark: grey[700],
        },
        background: {
            paper: '#2d353c',
            default: '#2d353c',
            appBar: '#2d353c',
            contentFrame: '#2d353c',
            chip: '#2d353c',
            avatar: '#2d353c'
        }
    },
    status: {
        danger: 'orange',
    },

    typography: {
        button: {
            fontWeight: 400,
            textAlign:
                'capitalize'
        },
    },
};
