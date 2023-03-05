import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <div className="justify-self-end py-2 flex items-center content-center text-text-bold">
      <a
        className="unset ml-4 rounded-sm transition-[background-size] duration-150 ease-in-out bg-left-bottom bg-[length:0%_55%] hover:bg-[length:100%_55%] bg-no-repeat bg-gradient-to-r from-primary-blue to-primary-blue dark:bg-none dark:hover:text-primary-blue"
        href="https://github.com/chuahxinyu/cissa-summerhack-2023"
        target="_blank"
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          padding: '1rem',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <GitHubIcon />
        <Typography variant="body2">GitHub</Typography>
      </a>
    </div>
  );
};

export default Footer;
