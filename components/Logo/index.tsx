import classNames from 'classnames';

type Props = { className?: string };
function Logo({ className = '' }: Props) {
  return (
    <span className={classNames('font-bold', className)}>
      <span className="text-black dark:text-white">Code</span>
      <span className="text-cyan-500 dark:text-cyan-400">Shelf</span>
    </span>
  );
}
export default Logo;
