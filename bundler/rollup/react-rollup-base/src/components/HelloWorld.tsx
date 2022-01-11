import React from 'react';

interface HelloWorldProps {
    name: string;
}

export const HelloWorld = ({ name }: HelloWorldProps): React.ReactElement  => (
    <h1>Hello {name ?? 'World'}</h1>
);