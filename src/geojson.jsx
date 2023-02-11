import { useState } from 'react';
import { Form } from '@raycast/api';
import stringify from 'json-stringify-pretty-compact';

import { showError } from './toaster';

export default function Command() {
  const [geojson, setGeojson] = useState();

  return (
    <Form>
      <Form.TextArea
        id="geojson"
        title="GeoJSOn"
        onChange={async (value) => {
          try {
            setGeojson(JSON.parse(value));
          } catch (e) {
            showError(e);
          }
        }}
      />
      <Form.TextArea
        id="formatted"
        title="Formatted"
        value={stringify(geojson)}
        readonly
      />
    </Form>
  );
}
