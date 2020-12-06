import React, {FC} from 'react';

interface Props {
  input: number;
}

export const Pad: FC<Props> = ({input}) => (`${input}`.length < 2 ? <>0{input}</> : <>{input}</>);
