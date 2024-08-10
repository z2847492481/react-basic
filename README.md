# react-basic

# performance optimization

1、prevent unnecessary renders

1.1 when the parent component has a state that child components don't depend on, but if the state changes, the child components will re-render. the first solution is to pass child components as props.

memo is a higher order component that will only re-render if the props change.

useMemo and useCallback are hooks that can be used to improve performance.

2、improve app speed and responsiveness

3、reduce bundle size