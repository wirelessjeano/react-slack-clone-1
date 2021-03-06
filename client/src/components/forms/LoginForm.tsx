import * as React from "react";
import { Form, Button, Label } from "semantic-ui-react";

interface Props {
  count: number;
  password: string;
  email: string;
  handleChange: (e: any) => void;
  submit: () => void;
}
const LoginForm: React.SFC<Props> = props => (
  <Form loading={props.count !== 0}>
    <Form.Field>
      <input
        placeholder="Email address"
        onChange={props.handleChange}
        name="email"
        type="email"
        value={props.email}
        required
      />
    </Form.Field>
    <Form.Field>
      <input
        placeholder="Password"
        onChange={props.handleChange}
        name="password"
        type="password"
        value={props.password}
        required
      />
    </Form.Field>
    <Button
      type="submit"
      fluid
      content="SUBMIT"
      className="bg-green white"
      onClick={props.submit}
    />
    <div className="tc pt2">
      <Label>
        Email
        <Label.Detail>stranger@email.com</Label.Detail>
      </Label>
      <Label>
        Password
        <Label.Detail>dinosaurs</Label.Detail>
      </Label>
    </div>
  </Form>
);

export default LoginForm;
