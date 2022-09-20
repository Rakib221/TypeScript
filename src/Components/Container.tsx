import React, {ReactNode} from 'react';

const defaultContainerProps = {
    heading: <h1>This is my heading</h1>
}

type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;
const Container = ({ heading, children }: ContainerProps) => {
    return (
        <div>
            <div>
                {heading}
            </div>
            <h1>{children}</h1>
        </div>
    );
};
Container.defaultProps = defaultContainerProps;
export default Container;