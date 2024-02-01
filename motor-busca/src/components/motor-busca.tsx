import React, { ComponentProps } from "react";
import "./motor-busca.styles.css";

function MotorBusca({ onSubmit, ...rest }: ComponentProps<"form">) {
  return (
    <form
      {...rest}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(e);
      }}
    >
      <div>
        <div className="form-item">
          <fieldset>
            <label>Data</label>
            <input type="date" />
          </fieldset>
        </div>
        <div className="form-item">
          <fieldset>
            <label>Cidade</label>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </fieldset>
        </div>
        <div className="form-item">
          <fieldset>
            <label>Viajantes</label>
            <input type="number" />
          </fieldset>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default MotorBusca;
