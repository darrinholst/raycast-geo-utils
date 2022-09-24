import { useState } from 'react';
import { Form, Clipboard } from '@raycast/api';
import { geojsonToWKT } from '@terraformer/wkt';

import { showError, showSuccess } from './toaster';

export default function Command() {
  const [wkt, setWkt] = useState('');

  return (
    <Form>
      <Form.TextArea
        id="geojson"
        title="GeoJSON"
        onChange={async (value) => {
          try {
            const converted = geojsonToWKT(JSON.parse(value));
            setWkt(converted);
            await Clipboard.copy(converted);
            showSuccess('WKT copied to clipboard');
          } catch (e) {
            showError(e);
          }
        }}
      />

      <Form.TextArea id="wkt" title="WKT" value={wkt} readonly />
    </Form>
  );
}
