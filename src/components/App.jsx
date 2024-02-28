export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: "#d0fafd"
      }}
    >
      <h1 style={{
        fontSize: 40,
        color: '#010101',
      }}>Your Todo List</h1>
      <button
            style={{
              fontSize: 30,
              color: '#d0fafd',
              backgroundColor: "#0abad0",
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}>Create</button>
    </div>
  );
};
