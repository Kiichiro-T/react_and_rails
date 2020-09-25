require 'test_helper'

class MaterialUiControllerTest < ActionDispatch::IntegrationTest
  test "should get pages" do
    get material_ui_pages_url
    assert_response :success
  end

end
