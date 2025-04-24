import './ProgressBar.css';

function ProgressBar({ value = 0 ,style,...props}) {
  return (
    <div className="progressbar">
      <div className="progressbar-fill" style={{ width: `${value}%` }} {...props} />
    </div>
  );
}

export default ProgressBar;

export const states = {
  "25%": { value: 25 },
  "75%": { value: 75 }
};
