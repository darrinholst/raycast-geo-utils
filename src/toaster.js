import { showToast, Toast } from '@raycast/api';

export function showSuccess(title) {
  showToast({ style: Toast.Style.Success, title });
}

export function showError(e) {
  showToast({
    style: Toast.Style.Failure,
    title: 'Something went wrong',
    message: e.message,
  });
}
