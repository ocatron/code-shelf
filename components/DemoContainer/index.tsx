import classNames from 'classnames';
import { ComponentPropsWithRef, forwardRef } from 'react';

type Props = ComponentPropsWithRef<'div'>;

const DemoContainer = forwardRef<HTMLDivElement, Props>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(
          'mt-6 rounded-xl border border-neutral-200/70 p-4 first:mt-0 contrast-more:border-neutral-400 dark:border-cyan-100/10 contrast-more:dark:border-neutral-400',
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

DemoContainer.displayName = 'DemoContainer';
export default DemoContainer;
