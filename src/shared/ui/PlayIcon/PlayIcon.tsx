import { FC } from 'react';

import cx from 'classnames';

import { SvgInterface, SvgWrapper } from '~shared/layouts/svg-layout/index';

interface PlayIconInterface extends SvgInterface {}

export const PlayIcon: FC<PlayIconInterface> = ({
  width = 8,
  height = 9,
  fill = '#838383',
  className,
}) => (
  <SvgWrapper className={cx(className)} width={width} height={height}>
    <svg viewBox="0 0 8 9">
      <path
        d="M7.88391 7.647L7.89157 5.17928L7.90362 1.30207C7.90472 0.919969 7.67361 0.54337 7.30778 0.330845L7.02958 0.168973C6.66266 -0.043552 6.22345 -0.056766 5.89486 0.135938L2.3954 2.1808L0.43812 3.32492C0.164297 3.48459 0.00328975 3.76648 0.00219446 4.08362L3.87613e-06 4.67385C-0.00109141 5.05595 0.230015 5.43255 0.595842 5.64507L2.46222 6.72862L2.59803 6.72091L3.48193 6.66586L3.87624 7.462L3.93648 7.58423L5.80285 8.66778C6.16978 8.8803 6.60899 8.89352 6.93758 8.70191L7.44579 8.4046C7.72071 8.24603 7.88281 7.96413 7.88391 7.647Z"
        fill={fill}
      />
    </svg>
  </SvgWrapper>
);
