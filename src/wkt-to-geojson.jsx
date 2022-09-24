import { useState } from 'react';
import { Clipboard, Form } from '@raycast/api';
import { wktToGeoJSON } from '@terraformer/wkt';
import truncate from '@turf/truncate';
import stringify from 'json-stringify-pretty-compact';

import { showError, showSuccess } from './toaster';

export default function Command() {
  const [geojson, setGeojson] = useState('');

  return (
    <Form>
      <Form.TextArea
        id="wkt"
        title="WKT"
        onChange={async (value) => {
          try {
            const converted = stringify(truncate(wktToGeoJSON(value)));
            setGeojson(converted);
            await Clipboard.copy(converted);
            showSuccess('GeoJSON copied to clipboard');
          } catch (e) {
            showError(e);
          }
        }}
      />

      <Form.TextArea id="geojson" title="GeoJson" value={geojson} readonly />
    </Form>
  );
}
