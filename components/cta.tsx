export const Cta = ({ text }) => {
  return (
    <>
      <div className="buttonGroup">
        <button className="button">{text}</button>
      </div>
      <style jsx>{`
        .buttonGroup {
          display: block;
          padding: 0.25rem 0;
          margin: -0.5rem -0.75rem 0.5rem -0.75rem;
        }

        .button {
          border: none;
          outline: none;
          color: white;
          border-radius: 2rem;
          background: var(--orange);
          font-size: 1em;
          padding: 1rem 2rem;
          margin: 0.5rem 0.75rem;
          cursor: pointer;
          transition: all 150ms ease-out;
        }

        .button:hover {
          background: var(--orange-light);
          box-shadow: 0 0 0 2px var(--orange-light);
        }
      `}</style>
    </>
  );
};