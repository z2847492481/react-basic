# react-basic

# performance optimization

1、prevent unnecessary renders

1.1 when the parent component has a state that child components don't depend on, but if the state changes, the child components will re-render. the first solution is to pass child components as props.

memo is a higher order component that will only re-render if the props change.

useMemo and useCallback are hooks that can be used to improve performance.

2、improve app speed and responsiveness

3、reduce bundle size


# need review

Section 11: How React Works Behind the Scenes

Section 12: Effects and Data Fetching

Section 17: React Router: Building Single-Page Applications (SPA)

Section 19: Performance Optimization and Advanced useEffect