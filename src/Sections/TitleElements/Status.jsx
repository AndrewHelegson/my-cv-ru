import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        width: '100%',
    },
});


export default function StatusBar() {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {

        let computeProgress = () => {
            const scrolled = document.documentElement.scrollTop;
            const scrollLength = document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const progress = `${100 * scrolled / scrollLength}`;
            setProgress(progress);
        }
        window.addEventListener("scroll", computeProgress);
        return () => window.removeEventListener("scroll", computeProgress);
    });

    return (
        <div className={classes.root}>
            <LinearProgress variant="determinate" value={progress} />
        </div>
    );
}
