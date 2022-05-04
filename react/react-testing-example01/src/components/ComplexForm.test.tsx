import React from "react";
import userEvent from "@testing-library/user-event";
import { act, render } from "@testing-library/react";
import ComplexForm, { ComplexFormProps } from "./ComplexForm";

/**
 * 이건 모든 테스트에서 호출되는 테스트 설정이다.
 * 
 * 테스트 설정 함수를 만들면 테스트 케이스에 대해 작성해야 하는 반복 코드의 양이
 * 줄어들고 테스트중인 컴포넌트와 상호작용하기 위한 선언적 테스트 헬퍼를 설정할 수 있다.
 */
function renderComplexForm(props?: Partial<ComplexFormProps>) {
  /* 제출과 취소 버튼을 위한 mock 콜백 함수를 설정한다. */
  const onSubmit = jest.fn();
  const onCancel = jest.fn();

  /* React Testing Library를 사용해 컴포넌트를 렌더링한다. */
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const result = render(<ComplexForm onSubmit={onSubmit} onCancel={onCancel} {...props} />);

  /* 다음 7개의 함수는 컴포넌트에서 공통 DOM 요소를 가져오기 위한 헬퍼 함수이다. */

  const Heading = () => result.getByText("Welcome, Zerry");

  const FirstNameInput = () => result.getByLabelText("First Name");

  const LastNameInput = () => result.getByLabelText("Last Name");

  const IsOver21Input = () =>
    result.getByLabelText("Are you at least 21 years old?");

  const FavoriteDrinkInput = () => result.queryByLabelText("What's your favorite drink?");

  const CancelButton = () => result.getByText("Cancel");

  const SubmitButton = () => result.getByText("Apply");

  /* 다음 6개의 함수는 DOM 요소와 상호작용하기 위한 헬퍼 함수이다. */

  function changeFirstName(name: string) {
    userEvent.type(FirstNameInput(), name);
  }

  function changeLastName(name: string) {
    userEvent.type(LastNameInput(), name);
  }

  function changeFavoriteDrinkInput(name: string) {
    userEvent.type(FavoriteDrinkInput() as HTMLElement, name);
  }

  async function clickIsOver21() {
    await act(async () => {
      userEvent.click(IsOver21Input());
    });
  }

  function clickSubmit() {
    userEvent.click(SubmitButton());
  }

  function clickCancel() {
    userEvent.click(CancelButton());
  }

  /* 
    마지막으로 이 유틸리티 렌더 함수에서 모든 함수와 상수를 내보낸다. 이를 통해 모든
    테스트 케이스에서 필요한 것을 얻을 수 있다.
  */
  return {
    result,
    onSubmit,
    changeFirstName,
    changeLastName,
    clickIsOver21,
    clickSubmit,
    clickCancel,
    FirstNameInput,
    LastNameInput,
    IsOver21Input,
    SubmitButton,
    CancelButton,
    Heading,
    FavoriteDrinkInput,
    changeFavoriteDrinkInput,
    onCancel,
  };
}

describe("<ComplexForm />", () => {
  it("기본 필드를 렌더링해야 한다.", async () => {
    const {
      FirstNameInput,
      LastNameInput,
      IsOver21Input,
      SubmitButton,
      Heading,
      FavoriteDrinkInput,
      CancelButton
    } = renderComplexForm();

    // 헤더
    expect(Heading()).toBeInTheDocument();
    // 입력
    expect(FirstNameInput()).toBeInTheDocument();
    expect(LastNameInput()).toBeInTheDocument();
    expect(IsOver21Input()).toBeInTheDocument();
    expect(FavoriteDrinkInput()).not.toBeInTheDocument();
    // 버튼들
    expect(CancelButton()).toBeInTheDocument();
    expect(SubmitButton()).toBeInTheDocument();
  });

  it("21세 이상 체크 여부에 따라 좋아하는 음료 입력을 토글해야한다.", async () => {
    const { clickIsOver21, FavoriteDrinkInput } = renderComplexForm();

    expect(FavoriteDrinkInput()).not.toBeInTheDocument();

    await clickIsOver21();

    expect(FavoriteDrinkInput()).toBeInTheDocument();

  });

  it("취소 버튼이 클릭되면 onCancel 함수가 호출되야 한다.", async () => {
    const { clickCancel, onCancel } = renderComplexForm();

    clickCancel();

    expect(onCancel).toHaveBeenCalled();
  });

  it("form 값으로 onSubmit을 호출해야 한다.", async () => {
    const {
      changeFirstName,
      changeLastName,
      clickIsOver21,
      changeFavoriteDrinkInput,
      clickSubmit,
      onSubmit
    } = renderComplexForm();

    changeFirstName('Zerry');
    changeLastName('Hogan');
    await clickIsOver21();
    changeFavoriteDrinkInput('Bourbon');
    clickSubmit();

    expect(onSubmit).toHaveBeenCalledWith({
      first_name: 'Zerry',
      last_name: 'Hogan',
      is_over_21: true,
      favorite_drink: 'Bourbon',
    });
  });
});